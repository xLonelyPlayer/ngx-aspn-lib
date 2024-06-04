
all:
	ng build theming && ng build button && ng build input && ng build common

app:
	ng build app

theming:
	ng build theming && npm install .\dist\theming\
