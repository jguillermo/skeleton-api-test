.DEFAULT_GOAL := help

## GENERAL ##
OWNER 			= utp
SERVICE_NAME 	= test-demo


## RESULT_VARS ##
ENV 			?= dev
PROJECT_NAME      = $(OWNER)-$(SERVICE_NAME)
export IMAGE_TEST = $(PROJECT_NAME)-test
export IMAGE_SERVER_DEMO = $(PROJECT_NAME)-server-demo

build: ## build image node : make build
	docker build -f container/test/Dockerfile -t $(IMAGE_TEST):latest container/test/

build_server_demo: ## build image de servidor demo : make build_server_demo
	docker build -f container/server_demo/Dockerfile -t $(IMAGE_SERVER_DEMO):latest container/server_demo/

install: ## instala todas las dependencias del proyecto : make install
	@make build
	@make build_server_demo
	@make console a="npm install"

test: ## Ejecuta el test : make test
	docker-compose -f container/docker-compose.yml run --rm test

restart: ## reinicia el test : make restart
	docker-compose -f container/docker-compose.yml down
	make test

down: ## elimina las instancias : make down
	docker-compose -f container/docker-compose.yml down
	docker network prune -f

ps: ## muestra los estados del container  : make ps
	docker-compose -f container/docker-compose.yml ps

network: ## estadpo de la red local : make test
	@docker --version
	@docker-compose --version
	#docker exec test-server-api ping -c 2 next.json-generator.com
	#docker exec test-server-api ping -c 2 local.db.com
	docker network ls
	#docker network inspect $$(docker network ls -q)


console: ## ejecuta la consola de la imagen node: make console a="param"
	@docker run --rm -t -v ${PWD}/application:/application $(IMAGE_TEST) ${a}

## Target Docker tools ##
docker-kill: ## Execute migrate : make migrate
	docker rm -f $$(docker ps -aq)

## Target Help ##
help:
	@printf "\033[31m%-16s %-59s %s\033[0m\n" "Target" "Help" "Usage"; \
	printf "\033[31m%-16s %-59s %s\033[0m\n" "------" "----" "-----"; \
	grep -hE '^\S+:.*## .*$$' $(MAKEFILE_LIST) | sed -e 's/:.*##\s*/:/' | sort | awk 'BEGIN {FS = ":"}; {printf "\033[32m%-16s\033[0m %-58s \033[34m%s\033[0m\n", $$1, $$2, $$3}'
