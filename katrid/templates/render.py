import os
import sys
from jinja2 import Environment, FileSystemLoader

env = Environment(loader=FileSystemLoader('./'))
env_docs = Environment(loader=FileSystemLoader('./documentation/'))

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
    'data-tables.html',
    'web-editors.html',
    'ck-editor.html',
    'grid.html',
    'tree-view.html',
    'inbox.html',
    'compose-email.html',
    'view-email.html',
    'glyphicons.html',
    'projects.html',
    'list-view.html',
    'calendar-view.html',
]

docs = [
    'index.html'
]

templs = [x for x in sys.argv if x.endswith('.html')] or templates

for tmp in templates:
    t = env.get_template(tmp)
    s = t.render(googleanalytics='googleanalytics' in sys.argv)
    f = open('output/' + tmp, 'w')
    f.write(s)

if len(templs) == len(templates):
    for tmp in docs:
        t = env_docs.get_template(tmp)
        s = t.render()
        f = open('output/documentation/' + tmp, 'w')
        f.write(s)
    os.system('mv output/documentation/*.html ../theme/documentation')

os.system('mv output/*.html ../theme/dist/')
