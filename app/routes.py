from flask import render_template
from . import app

@app.route('/')
def index():
        return render_template('index.html')

@app.route('/bio')
def bio():
        return render_template('bio.html')

@app.route('/projects')
def projects():
        return render_template('projects.html')

@app.route('/contact')
def contact():
        return render_template('contact.html')

@app.route('/resume')
def resume():
        return render_template('resume.html')

@app.route('/admin')
def admin():
        return render_template('admin.html')