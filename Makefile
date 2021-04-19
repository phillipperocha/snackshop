run_frontend:
	npm start

run_storybook:
	npm run storybook

dev:
	make -j2 run_frontend run_storybook
