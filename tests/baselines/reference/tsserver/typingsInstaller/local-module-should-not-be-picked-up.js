currentDirectory:: / useCaseSensitiveFileNames: false
Info seq  [hh:mm:ss:mss] Provided types map file "/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/project/app.js]
const c = require('./config');

//// [/user/username/projects/project/config.js]
export let x = 1

//// [/user/username/projects/project/jsconfig.json]
{
  "compilerOptions": {
    "moduleResolution": "commonjs"
  },
  "typeAcquisition": {
    "enable": true
  }
}

//// [/a/globalcache/cache/node_modules/@types/config/index.d.ts]
export let y: number;


Info seq  [hh:mm:ss:mss] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/project/app.js"
      },
      "seq": 1,
      "type": "request"
    }
Info seq  [hh:mm:ss:mss] getConfigFileNameForFile:: File: /user/username/projects/project/app.js ProjectRootPath: undefined:: Result: /user/username/projects/project/jsconfig.json
Info seq  [hh:mm:ss:mss] Creating configuration project /user/username/projects/project/jsconfig.json
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/project/jsconfig.json 2000 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Config file
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingStart",
      "body": {
        "projectName": "/user/username/projects/project/jsconfig.json",
        "reason": "Creating possible configured project for /user/username/projects/project/app.js to open"
      }
    }
Info seq  [hh:mm:ss:mss] Config: /user/username/projects/project/jsconfig.json : {
 "rootNames": [
  "/user/username/projects/project/app.js",
  "/user/username/projects/project/config.js"
 ],
 "options": {
  "allowJs": true,
  "maxNodeModuleJsDepth": 2,
  "allowSyntheticDefaultImports": true,
  "skipLibCheck": true,
  "noEmit": true,
  "configFilePath": "/user/username/projects/project/jsconfig.json"
 }
}
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project 1 undefined Config: /user/username/projects/project/jsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project 1 undefined Config: /user/username/projects/project/jsconfig.json WatchType: Wild card directory
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /user/username/projects/project/config.js 500 undefined WatchType: Closed Script info
Info seq  [hh:mm:ss:mss] Starting updateGraphWorker: Project: /user/username/projects/project/jsconfig.json
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project/config 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project/config 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project 0 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project 0 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Failed Lookup Locations
Info seq  [hh:mm:ss:mss] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Missing file
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project/node_modules/@types 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project/node_modules/@types 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/node_modules/@types 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Type roots
Info seq  [hh:mm:ss:mss] Finishing updateGraphWorker: Project: /user/username/projects/project/jsconfig.json projectStateVersion: 1 projectProgramVersion: 0 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/project/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)
	/user/username/projects/project/config.js Text-1 "export let x = 1"
	/user/username/projects/project/app.js SVC-1-0 "const c = require('./config');"


	config.js
	  Imported via './config' from file 'app.js'
	  Matched by default include pattern '**/*'
	app.js
	  Matched by default include pattern '**/*'

Info seq  [hh:mm:ss:mss] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}
/user/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/project/config: *new*
  {"pollingInterval":500}
/user/username/projects/project/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/project: *new*
  {}
/user/username/projects/project/config.js: *new*
  {}
/user/username/projects/project/jsconfig.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/project: *new*
  {}

Projects::
/user/username/projects/project/jsconfig.json (Configured) *new*
    projectStateVersion: 1
    projectProgramVersion: 0

ScriptInfos::
/user/username/projects/project/app.js (Open) *new*
    version: SVC-1-0
    containingProjects: 1
        /user/username/projects/project/jsconfig.json *default*
/user/username/projects/project/config.js *new*
    version: Text-1
    containingProjects: 1
        /user/username/projects/project/jsconfig.json

TI:: [hh:mm:ss:mss] Global cache location '/a/globalcache/cache', safe file path '/safeList.json', types map path /typesMap.json
TI:: [hh:mm:ss:mss] Processing cache location '/a/globalcache/cache'
TI:: [hh:mm:ss:mss] Trying to find '/a/globalcache/cache/package.json'...
TI:: [hh:mm:ss:mss] Finished processing cache location '/a/globalcache/cache'
TI:: [hh:mm:ss:mss] Npm config file: /a/globalcache/cache/package.json
TI:: [hh:mm:ss:mss] Npm config file: '/a/globalcache/cache/package.json' is missing, creating new one...
TI:: [hh:mm:ss:mss] Updating types-registry npm package...
TI:: [hh:mm:ss:mss] npm install --ignore-scripts types-registry@latest
TI:: [hh:mm:ss:mss] Updated types-registry npm package
TI:: typing installer creation complete
//// [/a/globalcache/cache/package.json]
{ "private": true }

//// [/a/globalcache/cache/node_modules/types-registry/index.json]
{
  "entries": {
    "config": {
      "latest": "1.3.0",
      "ts2.0": "1.0.0",
      "ts2.1": "1.0.0",
      "ts2.2": "1.2.0",
      "ts2.3": "1.3.0",
      "ts2.4": "1.3.0",
      "ts2.5": "1.3.0",
      "ts2.6": "1.3.0",
      "ts2.7": "1.3.0"
    }
  }
}


TI:: [hh:mm:ss:mss] Got install request
    {
      "projectName": "/user/username/projects/project/jsconfig.json",
      "fileNames": [
        "/user/username/projects/project/config.js",
        "/user/username/projects/project/app.js"
      ],
      "compilerOptions": {
        "allowJs": true,
        "maxNodeModuleJsDepth": 2,
        "allowSyntheticDefaultImports": true,
        "skipLibCheck": true,
        "noEmit": true,
        "configFilePath": "/user/username/projects/project/jsconfig.json",
        "allowNonTsExtensions": true
      },
      "typeAcquisition": {
        "enable": true,
        "include": [],
        "exclude": []
      },
      "unresolvedImports": [],
      "projectRootPath": "/user/username/projects/project",
      "kind": "discover"
    }
TI:: [hh:mm:ss:mss] Failed to load safelist from types map file '/typesMap.json'
TI:: [hh:mm:ss:mss] Explicitly included types: []
TI:: [hh:mm:ss:mss] Inferred typings from unresolved imports: []
TI:: [hh:mm:ss:mss] Finished typings discovery:
    {
      "cachedTypingPaths": [],
      "newTypingNames": [],
      "filesToWatch": [
        "/user/username/projects/project/bower_components",
        "/user/username/projects/project/node_modules"
      ]
    }
TI:: [hh:mm:ss:mss] Sending response:
    {
      "kind": "action::watchTypingLocations",
      "projectName": "/user/username/projects/project/jsconfig.json",
      "files": [
        "/user/username/projects/project/bower_components",
        "/user/username/projects/project/node_modules"
      ]
    }
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project/bower_components 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project/bower_components 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project/node_modules 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Directory location for typing installer
Info seq  [hh:mm:ss:mss] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/project/node_modules 1 undefined Project: /user/username/projects/project/jsconfig.json WatchType: Directory location for typing installer
TI:: [hh:mm:ss:mss] Sending response:
    {
      "projectName": "/user/username/projects/project/jsconfig.json",
      "typeAcquisition": {
        "enable": true,
        "include": [],
        "exclude": []
      },
      "compilerOptions": {
        "allowJs": true,
        "maxNodeModuleJsDepth": 2,
        "allowSyntheticDefaultImports": true,
        "skipLibCheck": true,
        "noEmit": true,
        "configFilePath": "/user/username/projects/project/jsconfig.json",
        "allowNonTsExtensions": true
      },
      "typings": [],
      "unresolvedImports": [],
      "kind": "action::set"
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "setTypings",
      "body": {
        "projectName": "/user/username/projects/project/jsconfig.json",
        "typeAcquisition": {
          "enable": true,
          "include": [],
          "exclude": []
        },
        "compilerOptions": {
          "allowJs": true,
          "maxNodeModuleJsDepth": 2,
          "allowSyntheticDefaultImports": true,
          "skipLibCheck": true,
          "noEmit": true,
          "configFilePath": "/user/username/projects/project/jsconfig.json",
          "allowNonTsExtensions": true
        },
        "typings": [],
        "unresolvedImports": [],
        "kind": "action::set"
      }
    }
TI:: [hh:mm:ss:mss] No new typings were requested as a result of typings discovery
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "projectLoadingFinish",
      "body": {
        "projectName": "/user/username/projects/project/jsconfig.json"
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "telemetry",
      "body": {
        "telemetryEventName": "projectInfo",
        "payload": {
          "projectId": "14e44f2ee3cfa137be67194f588a7a038f0db9769bc5ae66738ae9f27090fec8",
          "fileStats": {
            "js": 2,
            "jsSize": 46,
            "jsx": 0,
            "jsxSize": 0,
            "ts": 0,
            "tsSize": 0,
            "tsx": 0,
            "tsxSize": 0,
            "dts": 0,
            "dtsSize": 0,
            "deferred": 0,
            "deferredSize": 0
          },
          "compilerOptions": {
            "allowJs": true,
            "maxNodeModuleJsDepth": 2,
            "allowSyntheticDefaultImports": true,
            "skipLibCheck": true,
            "noEmit": true
          },
          "typeAcquisition": {
            "enable": true,
            "include": false,
            "exclude": false
          },
          "extends": false,
          "files": false,
          "include": false,
          "exclude": false,
          "compileOnSave": false,
          "configFileName": "jsconfig.json",
          "projectType": "configured",
          "languageServiceEnabled": true,
          "version": "FakeVersion"
        }
      }
    }
Info seq  [hh:mm:ss:mss] event:
    {
      "seq": 0,
      "type": "event",
      "event": "configFileDiag",
      "body": {
        "triggerFile": "/user/username/projects/project/app.js",
        "configFile": "/user/username/projects/project/jsconfig.json",
        "diagnostics": [
          {
            "text": "File '/a/lib/lib.d.ts' not found.\n  The file is in the program because:\n    Default library for target 'es5'",
            "code": 6053,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Array'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Boolean'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Function'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'IArguments'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Number'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'Object'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'RegExp'.",
            "code": 2318,
            "category": "error"
          },
          {
            "text": "Cannot find global type 'String'.",
            "code": 2318,
            "category": "error"
          },
          {
            "start": {
              "line": 3,
              "offset": 25
            },
            "end": {
              "line": 3,
              "offset": 35
            },
            "text": "Argument for '--moduleResolution' option must be: 'node10', 'classic', 'node16', 'nodenext', 'bundler'.",
            "code": 6046,
            "category": "error",
            "fileName": "/user/username/projects/project/jsconfig.json"
          }
        ]
      }
    }
Info seq  [hh:mm:ss:mss] Project '/user/username/projects/project/jsconfig.json' (Configured)
Info seq  [hh:mm:ss:mss] 	Files (2)

Info seq  [hh:mm:ss:mss] -----------------------------------------------
Info seq  [hh:mm:ss:mss] Open files: 
Info seq  [hh:mm:ss:mss] 	FileName: /user/username/projects/project/app.js ProjectRootPath: undefined
Info seq  [hh:mm:ss:mss] 		Projects: /user/username/projects/project/jsconfig.json
Info seq  [hh:mm:ss:mss] response:
    {
      "seq": 0,
      "type": "response",
      "command": "open",
      "request_seq": 1,
      "success": true,
      "performanceData": {
        "updateGraphDurationMs": *
      }
    }
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/user/username/projects/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/project/bower_components: *new*
  {"pollingInterval":500}
/user/username/projects/project/config:
  {"pollingInterval":500}
/user/username/projects/project/node_modules: *new*
  {"pollingInterval":500}
/user/username/projects/project/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/user/username/projects/project:
  {}
/user/username/projects/project/config.js:
  {}
/user/username/projects/project/jsconfig.json:
  {}

FsWatchesRecursive::
/user/username/projects/project:
  {}

Projects::
/user/username/projects/project/jsconfig.json (Configured) *changed*
    projectStateVersion: 1
    projectProgramVersion: 1 *changed*

Before running PendingInstalls callback:: count: 0

After running PendingInstalls callback:: count: 0
