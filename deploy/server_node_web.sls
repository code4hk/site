##Need git
nvm_install:
  nvm.installed:
    - path: /root/nvm
    - require:
      - file.directory: /root/nvm

node_install:
  nvm.install:
    - version: '0.10'
    - runas: root

node_use:
  nvm.default:
    - version: '0.10'
    - runas: root

/root/nvm:
    file.directory:
      - user: root
      - group: root
      - dir_mode: 755
      - file_mode: 644


nginx:
  pkg:
    - installed

