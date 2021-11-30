const {resolve} = require('path');

const {config, exec, cp, mkdir, rm, echo, exit} = require('shelljs');

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

function tophat({scope, files, packageDir}) {
  const root = resolve(__dirname, '..');
  const projectDir = process.argv[2];

  config.fatal = true;

  if (!projectDir) {
    log(
      'A target project directory is required. `yarn tophat PROJECT_DIRECTORY`',
    );
    exit(1);
  }

  const destPackageDir = resolve(root, `../${projectDir}/node_modules/`);

  log('building project...');
  exec('yarn run build');

  logBreak();

  files.forEach(({name, scoped}) => {
    logHeader(name);

    const source = resolve(packageDir, name);
    const destination = scoped
      ? resolve(destPackageDir, scope)
      : resolve(destPackageDir);
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
  log('Build copied to consuming project. ');
}

tophat({
  files: [
    {name: 'minou', scoped: false},
    {
      name: 'core',
      scoped: true,
    },
    {
      name: 'icons',
      scoped: true,
    },
    {
      name: 'theme',
      scoped: true,
    },
    {
      name: 'utilities',
      scoped: true,
    },
  ],
  scope: '@minou',
  packageDir: 'packages',
});
