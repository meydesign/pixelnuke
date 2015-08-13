import React, { PropTypes } from 'react';
import StylePropable from './mixins/stylePropable';
import Typography from './styles/typography';
import IconButton from './iconButton';
import NavigationMenu from './svgIcons/navigation/menu';
import Paper from './paper';

class AppBar {

  static propTypes = {
    onLeftIconButtonTouchTap: PropTypes.func,
    onRightIconButtonTouchTap: PropTypes.func,
    showMenuIconButton: PropTypes.bool,
    style: PropTypes.object,
    iconClassNameLeft: PropTypes.string,
    iconClassNameRight: PropTypes.string,
    iconElementLeft: PropTypes.element,
    iconElementRight: PropTypes.element,
    iconStyleRight: PropTypes.object,
    title: PropTypes.node,
    zDepth: PropTypes.number,
  };

  static contextTypes = {
    muiTheme: React.PropTypes.object,
  };

  static mixins = [
    StylePropable,
  ];

  getDefaultProps() {
    return {
      showMenuIconButton: true,
      title: '',
      zDepth: 1,
    };
  }

  componentDidMount() {
    if (process.env.NODE_ENV !== 'production') {
      if (this.props.iconElementLeft && this.props.iconClassNameLeft) {
        /* eslint-disable no-console */
        console.warn(
          'Properties iconClassNameLeft and iconElementLeft cannot be simultaneously defined. Please use one or the other.'
        );
        /* eslint-enable no-console */
      }

      if (this.props.iconElementRight && this.props.iconClassNameRight) {
        /* eslint-disable no-console */
        console.warn(
          'Properties iconClassNameRight and iconElementRight cannot be simultaneously defined. Please use one or the other.'
        );
        /* eslint-enable no-console */
      }
    }
  }

  getStyles() {
    const spacing = this.context.muiTheme.spacing;
    const themeVariables = this.context.muiTheme.component.appBar;
    const iconButtonSize = this.context.muiTheme.component.button.iconButtonSize;
    const flatButtonSize = 36;
    const styles = {
      root: {
        zIndex: 5,
        width: '100%',
        display: '-webkit-box; display: -webkit-flex; display: flex',
        minHeight: themeVariables.height,
        backgroundColor: themeVariables.color,
        paddingLeft: spacing.desktopGutter,
        paddingRight: spacing.desktopGutter,
      },
      title: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        margin: 0,
        paddingTop: 0,
        letterSpacing: 0,
        fontSize: 24,
        fontWeight: Typography.fontWeightNormal,
        color: themeVariables.textColor,
        lineHeight: themeVariables.height + 'px',
      },
      mainElement: {
        boxFlex: 1,
        flex: '1',
      },
      iconButton: {
        style: {
          marginTop: (themeVariables.height - iconButtonSize) / 2,
          marginRight: 8,
          marginLeft: -16,
        },
        iconStyle: {
          fill: themeVariables.textColor,
          color: themeVariables.textColor,
        },
      },
      flatButton: {
        color: themeVariables.textColor,
        backgroundColor: 'transparent',
        marginTop: (iconButtonSize - flatButtonSize) / 2 + 2,
      },
    };

    return styles;
  }

  render() {
    let menuElementLeft;
    let menuElementRight;
    let titleElement;

    const props = this.props;
    const styles = this.getStyles();
    const title = props.title;
    const iconRightStyle = this.mergeAndPrefix(styles.iconButton.style, {
      marginRight: -16,
      marginLeft: 'auto',
    }, props.iconStyleRight);

    if (title) {
      // If the title is a string, wrap in an h1 tag.
      // If not, just use it as a node.
      titleElement = typeof title === 'string' || title instanceof String
        ? (
          <h1 style={this.mergeAndPrefix(styles.title, styles.mainElement)}>{title}</h1>
        )
        : (
          <div style={this.mergeAndPrefix(styles.mainElement)}>{title}</div>
        );
    }

    if (props.showMenuIconButton) {
      let iconElementLeft;

      if (iconElementLeft) {
        switch (iconElementLeft.type.displayName) {
        case 'IconButton':
          iconElementLeft = React.cloneElement(iconElementLeft, {
            iconStyle: this.mergeAndPrefix(styles.iconButton.iconStyle),
          });
          break;

        default:
          iconElementLeft = props.iconElementLeft;
        }

        menuElementLeft = (
          <div style={styles.iconButton.style}>
            {iconElementLeft}
          </div>
        );
      } else {
        const child = (props.iconClassNameLeft)
          ? ''
          : (
            <NavigationMenu style={this.mergeAndPrefix(styles.iconButton.iconStyle)}/>
          );

        menuElementLeft = (
          <IconButton
            style={this.mergeAndPrefix(styles.iconButton.style)}
            iconStyle={this.mergeAndPrefix(styles.iconButton.iconStyle)}
            iconClassName={props.iconClassNameLeft}
            onTouchTap={this._onLeftIconButtonTouchTap}>
              {child}
          </IconButton>
        );
      }
    }

    if (props.iconElementRight) {
      let iconElementRight;

      switch (iconElementRight.type.displayName) {
      case 'IconButton':
        iconElementRight = React.cloneElement(iconElementRight, {
          iconStyle: this.mergeAndPrefix(styles.iconButton.iconStyle),
        });
        break;

      case 'FlatButton':
        iconElementRight = React.cloneElement(iconElementRight, {
          style: this.mergeStyles(styles.flatButton, iconElementRight.props.style),
        });
        break;

      default:
        iconElementRight = props.iconElementRight;
      }

      menuElementRight = (
        <div style={iconRightStyle}>
          {iconElementRight}
        </div>
      );
    } else if (props.iconClassNameRight) {
      menuElementRight = (
        <IconButton
          style={iconRightStyle}
          iconStyle={this.mergeAndPrefix(styles.iconButton.iconStyle)}
          iconClassName={props.iconClassNameRight}
          onTouchTap={this._onRightIconButtonTouchTap}
        />
      );
    }

    return (
      <Paper
        rounded={false}
        className={props.className}
        style={this.mergeAndPrefix(styles.root, props.style)}
        zDepth={props.zDepth}>
        {menuElementLeft}
        {titleElement}
        {menuElementRight}
        {props.children}
      </Paper>
    );
  }

}

export default AppBar;
