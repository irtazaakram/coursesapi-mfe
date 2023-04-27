|Build Status| |Codecov| |license|

coursesapi-mfe
=================================

Please tag **@edx/fedx-team** on any PRs or issues.  Thanks.

Introduction
------------

This repository is a template for Open edX micro-frontend applications. It is flagged as a Template Repository, meaning it can be used as a basis for new GitHub repositories by clicking the green "Use this template" button above.  The rest of this document describes how to work with your new micro-frontend after you've created a new repository from the template.

After Copying The Template
--------------------------

You'll want to do a find-and-replace to replace all instances of ``coursesapi-mfe`` with the name of your new repository.  Also edit index.html to replace "Application Template" with a friendly name for this application that users will see in their browser tab.

**Prerequisite**

`Devstack <https://edx.readthedocs.io/projects/edx-installing-configuring-and-running/en/latest/installation/index.html>`_.  If you start Devstack with ``make dev.up.ecommerce`` that should give you everything you need as a companion to this frontend.

**Installation and Startup**

In the following steps, replace "coursesapi-mfe' with the name of the repo you created when copying this template above.

1. Clone your new repo:

  ``git clone https://github.com/openedx/coursesapi-mfe.git``

2. Use node v12.x.

   The micro-frontend build scripts support node 12.  Using other major versions of node *may* work, but is unsupported.  For convenience, this repository includes an .nvmrc file to help in setting the correct node version via `nvm <https://github.com/nvm-sh/nvm>`_.

3. Install npm dependencies:

  ``cd coursesapi-mfe && npm install``

4. Update the application port to use for local development:

   Default port is 8080. If this does not work for you, update the line `PORT=8080` to your port in all .env.* files

5. Start the dev server:

  ``npm start``

The dev server is running at `http://localhost:8080 <http://localhost:8080>`_ or whatever port you setup.

Making Your New Project's README File
-------------------------------------

Move the file ``README-template-frontend-app.rst`` to your project's ``README.rst`` file. Please fill out all
the sections - this helps out all developers understand your MFE, how to install it, and how to use it.

Project Structure
-----------------

The source for this project is organized into nested submodules according to the ADR `Feature-based Application Organization <https://github.com/openedx/coursesapi-mfe/blob/master/docs/decisions/0002-feature-based-application-organization.rst>`_.

Build Process Notes
-------------------

**Production Build**

The production build is created with ``npm run build``.

Internationalization
--------------------

Please see `edx/frontend-platform's i18n module <https://edx.github.io/frontend-platform/module-Internationalization.html>`_ for documentation on internationalization.  The documentation explains how to use it, and the `How To <https://github.com/openedx/frontend-i18n/blob/master/docs/how_tos/i18n.rst>`_ has more detail.

.. |Build Status| image:: https://api.travis-ci.com/edx/coursesapi-mfe.svg?branch=master
   :target: https://travis-ci.com/edx/coursesapi-mfe
.. |Codecov| image:: https://codecov.io/gh/edx/coursesapi-mfe/branch/master/graph/badge.svg
   :target: https://codecov.io/gh/edx/coursesapi-mfe
.. |license| image:: https://img.shields.io/npm/l/@edx/coursesapi-mfe.svg
   :target: @edx/coursesapi-mfe
