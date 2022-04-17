/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ['main'],
  // eslint-disable-next-line no-template-curly-in-string
  tagFormat: 'v${version}',
  preset: 'conventionalcommits',
  plugins: [
    // verify commits
    '@semantic-release/commit-analyzer',
    // generate release notes
    '@semantic-release/release-notes-generator',
    // generate CHANGELOG.md
    [
      '@semantic-release/changelog',
      {
        changelogTitle: '# npm-package-quickstart Changelog',
      },
    ],
    // publish on npm
    '@semantic-release/npm',
    // publish a new release on github
    [
      '@semantic-release/github',
      {
        assets: [
          'dist',
          'LICENSE',
          'CHANGELOG.md',
          'README.md',
          'package.json',
        ],
        // Set to false to disable opening an issue when a release fails.
        failComment: false,
        failTitle: false,
        releasedLabels: false,
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['CHANGELOG.md', 'README.md', 'package.json'],
        message:
          // eslint-disable-next-line no-template-curly-in-string
          'chore: Release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
}
