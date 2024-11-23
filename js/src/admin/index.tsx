import app from 'flarum/admin/app';
import S3SettingsPage from './components/S3SettingsPage';
import addCDNToWidgets from './extenders/addCDNToWidgets';

app.initializers.add('fof/s3-assets', () => {
  app.extensionData.for('fof-s3-assets').registerPage(S3SettingsPage);

  addCDNToWidgets();
});
