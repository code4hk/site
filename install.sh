#
#Installation
#
sudo apt-get -y update
sudo apt-get install -y curl git rsync

wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.7.0/install.sh | sh
source ~/.nvm/nvm.sh
nvm install 0.10
nvm use 0.10

npm install -g bower gulp

#
# Virtualbox shared folder can't contain sym link
# Solution from 
# https://github.com/hackfoldr/hackfoldr/blob/master/Vagrantfile
#
rm -rf /vagrant/node_modules
mkdir -p /home/vagrant/node_modules /vagrant/node_modules
sudo mount --bind /home/vagrant/node_modules /vagrant/node_modules
cd /vagrant
npm install
npm run start


#
# Init app
#
cd /vagrant
bower install


#
# start app
#
# Host 8000 port will be forwarded to guest 8000 port, as defined in Vagrantfile
python -m SimpleHTTPServer 8000 &
