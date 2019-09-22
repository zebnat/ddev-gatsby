#!/bin/bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

curl -fLo ~/.vimrc https://www.danieldev.es/scripts/vimrc.cfg

curl -fLo ~/.vim/colors/atom-dark-256.vim https://raw.githubusercontent.com/gosukiwi/vim-atom-dark/master/colors/atom-dark-256.vim
curl -fLo ~/.vim/colors/atom-dark.vim https://raw.githubusercontent.com/gosukiwi/vim-atom-dark/master/colors/atom-dark.vim