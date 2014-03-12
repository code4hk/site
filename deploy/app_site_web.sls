/home/code4hksite/nginx/conf/:
  file.recurse:
    - source: salt://nginx/www/
    - user: root
    - group: root
    - dir_mode: 755
    - file_mode: 644
    - include_empty: True

nginx_running:
  service.running:
    - name: nginx
    - enable: True
    - reload: True
    - watch:
      - file: /home/code4hksite/nginx/conf/*

/etc/nginx/sites-enabled/code4hksite:
    file.symlink:
        - target: /home/code4hksite/nginx/conf/nginx.conf

# npm_install_grunt:
#   cmd.run:
#     - name: . /etc/bash.bashrc && npm install -g grunt-cli
#     - user: root
#   require:
#     - nvm: node_use 


##For amazon, Create /etc/nginx/sites-enabled

##Modify include/etc/nginx/sites-enabled/