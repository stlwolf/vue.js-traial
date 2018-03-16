#!/usr/bin/env bash

NODE_VER="v8.9.0"

cd /usr/local/
git clone https://github.com/riywo/ndenv.git
chmod -R g+rwxXs /usr/local/ndenv/
mkdir /usr/local/ndenv/plugins
cd /usr/local/ndenv/plugins
git clone https://github.com/riywo/node-build.git
cat << "EOF" > /etc/profile.d/ndenv.sh
export NDENV_ROOT=/usr/local/ndenv
export PATH="$NDENV_ROOT/bin:$PATH"
eval "$(ndenv init -)"
EOF
source /etc/profile.d/ndenv.sh

ndenv install ${NODE_VER}
ndenv global ${NODE_VER}
ndenv rehash
