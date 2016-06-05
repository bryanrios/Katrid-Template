import os
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('./'))

templates = [
    'forms.html',
    'tables.html',
    'xeditable-forms.html',
    'plugin-forms.html',
    'ng-report.html',
    'flot.html',
    'chartjs.html',
    'dashboard-1.html',
    'dashboard-2.html',
    'buttons.html',
    'easy-pie-chart.html',
    'crm.html',
    'advanced-forms.html',
    'blog.html',
    'article.html',
    'login.html',
    'index.html',
    '404.html',
    '403.html',
    '500.html',
    'debug-500.html',
    '550.html',
    'typography.html',
    'panels.html',
    'wells.html',
    'font-awesome.html',
    'faq.html',
    'components.html',
    'callouts.html',
    'modals.html',
    'general.html',
    'form-elements.html',
]

for tmp in templates:
    t = env.get_template(tmp)
    s = t.render()
    f = open('output/' + tmp, 'w')
    f.write(s)

os.system('mv output/*.html ../theme/dist/')
