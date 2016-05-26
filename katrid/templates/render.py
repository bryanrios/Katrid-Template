import os
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('./'))

templates = [
    'forms.html',
    'tables.html',
    'xeditable-forms.html',
    'plugin-forms.html',
    'ng-report.html',
]

for tmp in templates:
    t = env.get_template(tmp)
    s = t.render()
    f = open('output/' + tmp, 'w')
    f.write(s)

os.system('cp output/*.html ../theme/dist/')
