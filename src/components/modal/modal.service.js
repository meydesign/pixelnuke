import angular from 'angular';
import 'angular-bootstrap';

angular
  .module('pixelnukeApp')
  .factory('Modal', ($rootScope, $modal) => {
    function openModal(scope, modalClass) {
      const localModalClass = modalClass || 'modal-default';
      const localModalScope = $rootScope.$new();
      const localScope = scope || {};

      angular.extend(localModalScope, localScope);

      return $modal.open({
        templateUrl: 'components/modal/modal.html',
        windowClass: localModalClass,
        scope: localModalScope,
      });
    }

    return {
      confirm: {
        delete: (del) => {
          const localDel = del || angular.noop;

          return () => {
            const args = Array.prototype.slice.call(arguments);
            const name = args.shift();
            let deleteModal;

            deleteModal = openModal({
              modal: {
                dismissable: true,
                title: 'Confirm Delete',
                html: '<p>Are you sure you want to delete <strong>' + name + '</strong> ?</p>',
                buttons: [
                  {
                    classes: 'btn-danger',
                    text: 'Delete',
                    click: (e) => {
                      deleteModal.close(e);
                    },
                  },
                  {
                    classes: 'btn-default',
                    text: 'Cancel',
                    click: (e) => {
                      deleteModal.dismiss(e);
                    },
                  },
                ],
              },
            }, 'modal-danger');

            deleteModal.result.then((event) => {
              localDel.apply(event, args);
            });
          };
        },
      },
    };
  });
