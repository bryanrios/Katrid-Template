import os

base_dir = '/home/alexandre/workspace/katrid/theme-dist/'
os.chdir(base_dir)

os.system('rm -rf ' + base_dir + '*')
os.system('rm katrid-theme.zip')
os.system('mkdir ' + base_dir + '/plain-html5')
os.system('mkdir ' + base_dir + '/documentation')
os.system('cp /home/alexandre/workspace/katrid/katrid/katrid/templates/bin/README ' + base_dir)
os.system('cp -a /home/alexandre/workspace/katrid/katrid/katrid/theme/dist/* ' + base_dir + 'plain-html5')
os.system('cp -a /home/alexandre/workspace/katrid/katrid/katrid/theme/documentation/* ' + base_dir + 'documentation')
os.system('zip -r katrid-theme.zip README plain-html5 documentation')
