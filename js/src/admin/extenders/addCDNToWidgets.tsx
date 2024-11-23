import app from 'flarum/admin/app';
import { extend } from 'flarum/common/extend';
import StatusWidget from 'flarum/admin/components/StatusWidget';

export default function addCDNToWidgets() {
  extend(StatusWidget.prototype, 'items', function (items) {
    items.add('cdn', [<strong>CDN</strong>, <br />, app.data.cdn], 50);
  });
}
