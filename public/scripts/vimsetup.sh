#!/bin/bash

# requires wget
echo "Downloading Plug"
wget https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

echo "Installing Plug"
mkdir -p ~/.vim/autoload/
mv plug.vim ~/.vim/autoload/plug.vim

echo "Downloading vimrc.cfg from https://www.danieldev.es/scripts/vimrc.cfg"
wget https://www.danieldev.es/scripts/vimrc.cfg

echo "Installing .vimrc"
mv vimrc.cfg ~/.vimrc

echo "Downloading color profiles"
wget https://raw.githubusercontent.com/gosukiwi/vim-atom-dark/master/colors/atom-dark-256.vim
wget https://raw.githubusercontent.com/gosukiwi/vim-atom-dark/master/colors/atom-dark.vim

echo "Install color profiles"
mkdir -p ~/.vim/colors/
mv atom-dark* ~/.vim/colors/

# requires curl

#curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
#    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

#curl -fLo ~/.vimrc https://www.danieldev.es/scripts/vimrc.cfg

#curl -fLo ~/.vim/colors/atom-dark-256.vim https://raw.githubusercontent.com/gosukiwi/vim-atom-dark/master/colors/atom-dark-256.vim
#curl -fLo ~/.vim/colors/atom-dark.vim https://raw.githubusercontent.com/gosukiwi/vim-atom-dark/master/colors/atom-dark.vim