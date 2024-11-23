import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import ItemList from 'flarum/common/utils/ItemList';
import Placeholder from 'flarum/common/components/Placeholder';
import type Mithril from 'mithril';

type AwsRegion = {
  value: string;
  label: string;
};

export default class S3SettingsPage extends ExtensionPage {
  s3SetByEnv!: boolean;
  settingPrefix!: string;
  awsRegions!: AwsRegion[];

  oninit(vnode: Mithril.Vnode) {
    super.oninit(vnode);

    this.awsRegions = app.data.FoFS3Regions as AwsRegion[];
    this.s3SetByEnv = app.data.s3SetByEnv as boolean;
    this.settingPrefix = app.data.FoFS3ShareWithFoFUpload ? 'fof-upload.' : 'fof-s3-assets.';
  }

  content() {
    return (
      <div className="S3SettingsPage">
        <div className="container">
          <div className="S3SettingsPageTabPage S3SettingsPage--settings">
            <div className="Form">
              {this.settingsItems().toArray()}
              <div className="Form-group">{this.submitButton()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  settingsItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    items.add(
      'general',
      <div className="Section">
        <h3>{app.translator.trans('fof-s3-assets.admin.settings.general.heading')}</h3>
        <p className="helpText">{app.translator.trans('fof-s3-assets.admin.settings.general.help')}</p>
        {this.generalItems().toArray()}
      </div>
    );

    !this.s3SetByEnv &&
      items.add(
        's3',
        <div className="Section">
          <h3>{app.translator.trans('fof-s3-assets.admin.settings.s3.heading')}</h3>
          <p className="helpText">{app.translator.trans('fof-s3-assets.admin.settings.s3.help')}</p>
          {this.s3Items().toArray()}
        </div>
      );

    !this.s3SetByEnv &&
      items.add(
        's3-compatible',
        <div className="Section">
          <h3>{app.translator.trans('fof-s3-assets.admin.settings.s3-compatible.heading')}</h3>
          <p className="helpText">{app.translator.trans('fof-s3-assets.admin.settings.s3-compatible.help')}</p>
          {this.s3CompatibleItems().toArray()}
        </div>
      );

    return items;
  }

  generalItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    app.initializers.has('fof-upload') &&
      !this.s3SetByEnv &&
      items.add(
        'shareWithFoFUpload',
        this.buildSettingComponent({
          setting: 'fof-s3-assets.share_s3_config_with_fof_upload',
          type: 'boolean',
          label: app.translator.trans('fof-s3-assets.admin.settings.general.shareWithFoFUpload.label'),
          help: app.translator.trans('fof-s3-assets.admin.settings.general.shareWithFoFUpload.help'),
        })
      );

    // If there are no items, add a placeholder.
    if (items.toArray().length === 0 && this.s3SetByEnv) {
      items.add('setByEnv', <Placeholder text={app.translator.trans('fof-s3-assets.admin.settings.general.configured_by_environment')} />);
    }

    return items;
  }

  s3Items(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    items.add(
      'awsS3Key',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Key`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3.keyid.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3.keyid.help'),
      })
    );

    items.add(
      'awsS3Secret',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Secret`,
        type: 'password',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3.secret.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3.secret.help'),
      })
    );

    items.add(
      'awsS3Region',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Region`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3.region.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3.region.help'),
      })
    );

    items.add(
      'awsS3Bucket',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Bucket`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3.bucket.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3.bucket.help'),
      })
    );

    items.add(
      'awsS3ACL',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3ACL`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3.acl.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3.acl.help'),
      })
    );

    items.add(
      'awsS3CacheControl',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3CacheControl`,
        type: 'number',
        min: 0,
        label: app.translator.trans('fof-s3-assets.admin.settings.s3.cache-control.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3.cache-control.help'),
      })
    );

    return items;
  }

  s3CompatibleItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    items.add(
      'cdnUrl',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}cdnUrl`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3-compatible.url.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3-compatible.url.help'),
      })
    );

    items.add(
      'awsS3Endpoint',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Endpoint`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3-compatible.endpoint.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3-compatible.endpoint.help'),
      })
    );

    items.add(
      'awsS3UsePathStyleEndpoint',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3UsePathStyleEndpoint`,
        type: 'boolean',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3-compatible.path-style-endpoint.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3-compatible.path-style-endpoint.help'),
      })
    );

    return items;
  }
}
