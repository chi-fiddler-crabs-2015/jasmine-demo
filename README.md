# Setting up Jasmine

---

### Set up Jasmine

Add it to your gemfile

``` ruby
group :development, :test do
  gem 'jasmine-rails'
end
```

Bundle, then run the installer

`rails generate jasmine_rails:install`

---

### Set up Jasmine Fixtures

Download it.

`https://github.com/searls/jasmine-fixture`

Put **jasmine-fixture.js** into **/spec/javascripts/helpers/**

You probably will need to create this directory.

---

### Write your first spec

Create a spec file in **/spec/javascripts/**.

Write some tests, yo!

Hit **http://localhost:3000/specs**.

