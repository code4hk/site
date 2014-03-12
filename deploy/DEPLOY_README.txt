Based on salt stack
##Install salt stack
wget -O - http://bootstrap.saltstack.org | sudo sh
http://docs.saltstack.com/topics/installation/index.html


##Below steps are only required on master
- Create folder on minions
/srv/salt/
/srv/salt/_modules
/srv/salt/_states
/srv/pillar

- Create soft links to customized modules / move custom modules there

- Copy pillar/packages.sls to /srv/pillar/

##install with salt
salt-call --local state.highstate -l debug

##start Server
Currently auto-start failing, run 
run `nohup node scripts/web-server.js &` under  /home/code4hksite/site

##Testing particular salt (with custom modules installed in state.highstate)
salt-call --local state.sls app_site test=True 

salt-call --local state.sls server_node_web test=True

##To be used in Unix-like machine
tested as masterless, master=slave=local



##To test in local of coz better have a VM



##Execute as root for web server and app id setup
server_node_web.sls
server_app_site.sls

##Complete state on running server


##Server are also setup with some basics

##Not to have circular deps on salt config and git repo
ideally: 
wget the list of files in github starting with server* , recursively, but submodule cant be dl like that 

simpler: zip it in local and upload and wget

https://github.com/vincentlaucy/site/tree/salt/deploy



