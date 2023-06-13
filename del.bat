:: 备注:del.bat脚本放置于'GitHub pages'部署的页面目录下

:: 防止中文乱码
chcp 65001

@echo off

:: 设置保护目录、文件参数配置
set defendDirName01=.git
set defendBatSelf01=del.bat
set defendBatSelf02=.gitignore


for /D %%i in (*) DO (
	if not %%i==%defendDirName01% (
		if not %%i==保留文件夹02（示例） (
			rem echo 删文件夹：%%i 
			rd /S /Q %%i
		)
	)
)

for %%i in (*) DO (
	if not %%i==%defendBatSelf01% (
		if not %%i==%defendBatSelf02% (
			rem echo 删除文件：%%i 
			del %%i 
		) 
	)
)