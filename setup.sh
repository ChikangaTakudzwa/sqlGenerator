ehco "Installing pipenv, make sure pip and python are already installed"
pip install pipenv

ehco "Create app dir and cd into it"
mkdir gen && cd gen

ehco "use pipenv to create a Python 3 (--three) virtualenv for our project"
pipenv --three


ehco "install flask a dependency on our project"
pipenv install flask

ehco "Creating module"
mkdir query && cd query

ehco "reate an empty __init__.py file"
touch __init__.py





