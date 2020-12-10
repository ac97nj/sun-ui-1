sudo  rm -rf dist
sudo yarn build
cd dist
sudo   git init
sudo  git add .
sudo git commit -m "0.1"
sudo  git branch -M master
git remote add origin https://gitee.com/ac97nj/sun-dist.git
git push -f -u origin master
