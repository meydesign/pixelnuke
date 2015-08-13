import { join } from 'path';
import { Router } from 'express';
import jade from 'jade';
import fm from 'front-matter';
import fs from '../utils/fs';

const CONTENT_DIR = join(__dirname, './content');

const parseJade = (path, jadeContent) => {
  const content = fm(jadeContent);
  const html = jade.render(content.body, null, '  ');
  const page = Object.assign({ path, content: html }, content.attributes);

  return page;
};

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const path = req.query.path;

    if (!path || path === 'undefined') {
      res.status(400).json({error: `The 'path' query parameter cannot be empty.`});
      return;
    }

    let fileName = join(CONTENT_DIR, (path === '/' ? '/index' : path) + '.jade');

    if (!await fs.exists(fileName)) {
      fileName = join(CONTENT_DIR, path + '/index.jade');
    }

    if (!await fs.exists(fileName)) {
      res.status(404).json({error: `The page '${path}' is not found.`});
    } else {
      const source = await fs.readFile(fileName, { encoding: 'utf8' });
      const content = parseJade(path, source);

      res.json(content);
    }
  } catch (err) {
    next(err);
  }
});

export default router;
