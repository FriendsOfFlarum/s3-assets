import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import ItemList from 'flarum/common/utils/ItemList';
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
        'aws-s3',
        <div className="Section">
          <h3>{app.translator.trans('fof-s3-assets.admin.settings.aws-s3.heading')}</h3>
          <p className="helpText">{app.translator.trans('fof-s3-assets.admin.settings.aws-s3.help')}</p>
          {this.awss3Items().toArray()}
        </div>
      );

    !this.s3SetByEnv &&
      items.add(
        'aws-s3-compatible',
        <div className="Section">
          <h3>{app.translator.trans('fof-s3-assets.admin.settings.aws-s3-compatible.heading')}</h3>
          <p className="helpText">{app.translator.trans('fof-s3-assets.admin.settings.aws-s3-compatible.help')}</p>
          {this.awss3CompatibleItems().toArray()}
        </div>
      );

    return items;
  }

  generalItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    app.initializers.has('fof-upload') &&
      items.add(
        'shareWithFoFUpload',
        this.buildSettingComponent({
          setting: 'fof-s3-assets.share_s3_config_with_fof_upload',
          type: 'boolean',
          label: app.translator.trans('fof-s3-assets.admin.settings.general.shareWithFoFUpload.label'),
          help: app.translator.trans('fof-s3-assets.admin.settings.general.shareWithFoFUpload.help'),
        })
      );

    return items;
  }

  awss3Items(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    items.add(
      'awsS3Key',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Key`,
        type: 'password',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3key.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3key.help'),
      })
    );

    items.add(
      'awsS3Secret',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Secret`,
        type: 'password',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3secret.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3secret.help'),
      })
    );

    items.add(
      'awsS3Region',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Region`,
        type: 'select',
        options: this.awsRegions.reduce(
          (options, region) => {
            options[region.value] = `${region.label} (${region.value})`;
            return options;
          },
          {} as Record<string, string>
        ),
        label: app.translator.trans('fof-s3-assets.admin.settings.s3region.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3region.help'),
      })
    );

    items.add(
      'awsS3Bucket',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Bucket`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3bucket.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3bucket.help'),
      })
    );

    items.add(
      'awsS3ACL',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3ACL`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3acl.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3acl.help'),
      })
    );

    return items;
  }

  awss3CompatibleItems(): ItemList<Mithril.Children> {
    const items = new ItemList<Mithril.Children>();

    items.add(
      'cdnUrl',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}cdnUrl`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3url.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3url.help'),
      })
    );

    items.add(
      'awsS3Endpoint',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3Endpoint`,
        type: 'string',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3endpoint.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3endpoint.help'),
      })
    );

    items.add(
      'awsS3UsePathStyleEndpoint',
      this.buildSettingComponent({
        setting: `${this.settingPrefix}awsS3UsePathStyleEndpoint`,
        type: 'boolean',
        label: app.translator.trans('fof-s3-assets.admin.settings.s3path-style-endpoint.label'),
        help: app.translator.trans('fof-s3-assets.admin.settings.s3path-style-endpoint.help'),
      })
    );

    return items;
  }
}
