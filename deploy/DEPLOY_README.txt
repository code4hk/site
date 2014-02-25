Based on salt stack

##To be used in Unix-like machine
tested as masterless, master=slave=local

salt-call --local state.highstate -l debug


##Execute as root for web server and app id setup
server_node_web.sls
server_app_site.sls

##Complete state on running server


##Server are also setup with some basics