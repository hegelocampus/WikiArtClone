FROM ruby:2.6.3-alpine3.9

RUN apk add --no-cache --update \
  build-base \
  curl \
  linux-headers \
  nodejs \
  npm \
  postgresql-dev\
  yarn \
  zsh

# replace shell with zsh so we can source files
RUN rm /bin/sh && ln -s /bin/zsh /bin/sh

ARG DATABASE_URL=postgres://postgres@db
ENV RAILS_ENV=production
ENV NODE_ENV=production

WORKDIR /my_app
COPY Gemfile* /my_app/

RUN gem install bundler -v 2.0.2 \
  && bundle install \
  --retry 5 \
  --without=development,test \
  --quiet

COPY package.json yarn.lock /my_app/
RUN yarn -s

COPY . /my_app

ENV RAILS_SERVE_STATIC_FILES="true"
RUN bundle exec rails assets:precompile

COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh

EXPOSE 3000

# The main command to run when the container starts. Also
# tell the Rails dev server to bind to all interfaces by
# default.

CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]

