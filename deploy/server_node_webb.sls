nvm_install:
  nvm:
    - installed

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
