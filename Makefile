test-unit:
	 .\node_modules\.bin\ava

test :  babel test-unit

babel : ; .\node_modules\.bin\babel src --out-dir dist

clean :  ;rm -fdR dist

bump: ;node ./bumpVersion.js

serve: ;node ./serve.js

version: test bump

pub: ;npm publish

publish: test bump pub

dist: clean babel test bump pub

.PHONY: es6 babel test-unit test-cov clean
    
    
