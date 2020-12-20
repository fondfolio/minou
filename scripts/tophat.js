const {resolve} = require('path');

const {config, cp, mkdir, rm, echo, exit} = require('shelljs');

const root = resolve(__dirname, '..');
const projectDir = process.argv[2];

config.fatal = true;
const logBreak = () => {
  echo(' ');
};
const log = (text) => {
  echo(`  ${text}`);
};
const logDivder = () => {
  logBreak();
  echo('-----');
  logBreak();
};
const logHeader = (header) => {
  echo(`/ ${header}`);
  logBreak();
};

const SCOPE = '@minou';
const LOCAL_PACKAGE_DIR = 'packages';

if (!projectDir) {
  log(
    'A target project directory is required. `yarn tophat PROJECT_DIRECTORY`',
  );
  exit(1);
}

const DEST_PACKAGE_DIR = resolve(root, `../${projectDir}/node_modules/`);

const files = [
  {name: 'minou', scope: false},
  {
    name: 'core',
    scope: true,
  },
  {
    name: 'icons',
    scope: true,
  },
  {
    name: 'theme',
    scope: true,
  },
  {
    name: 'utilities',
    scope: true,
  },
];

logBreak();
files.forEach(({name, scope}) => {
  logHeader(name);

  const source = resolve(LOCAL_PACKAGE_DIR, name);
  const destination = scope
    ? resolve(DEST_PACKAGE_DIR, SCOPE)
    : resolve(DEST_PACKAGE_DIR);
  const destinationPackage = resolve(destination, name);

  log(`Removing ${destinationPackage}...`);
  rm('-rf', destinationPackage);

  log(`Creating new build directory at ${destination}...`);
  mkdir('-p', destination);

  log('Copying build to node_modules...');
  cp('-R', source, destination);

  log('Success!');
  logDivder();
});

logBreak();
log(
  'Build copied to consuming project. You can now run the consuming app and it will include your changes from Polaris.',
);
