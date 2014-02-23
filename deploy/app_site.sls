code4hksite_up:
  cmd.run:
    - name:  nohup node scripts/web-server.js &
    - cwd: {{ pillar['app_path'] }}/app
    - user: code4hksite
  require:
    - cmd: code4hksite_gulp_build

code4hksite_gulp_build:
  cmd.run:
    - name:  gulp build
    - cwd: {{ pillar['app_path'] }}
    - user: code4hksite
  require:
    - git: https://github.com/code4hk/site.git
    - nvm: node_use    
  #   - cmd: mabogo_build_npm


https://github.com/code4hk/site.git:
  git.latest:
    - rev: master
    - user: code4hksite
    - target: {{ pillar['app_path'] }}
    - shell: /bin/bash
    # - identity: # ready-only


# {{ pillar['home_path'] }}/db:
#     file.directory:
#       - user: code4hksite
#       - group: code4hkgrp
#       - dir_mode: 755
#       - file_mode: 644  
