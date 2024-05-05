# ig-nodejs-02


```bash
 yarn global add typescript     
```


## Migrations

### Create Migration
- Create Migration file 
Example:My migration name is CreateSpecifications
```bash
 yarn migration:create ./src/database/migrations/CreateSpecifications
```
Edit File Migration created implementing methods UP and Down


### Run Migration
```bash
 npx typeorm-ts-node-commonjs migration:run -d ./src/database/index.ts 
```

### Revert Migration
```bash
npx typeorm-ts-node-commonjs migration:revert -d ./src/database/index.ts 
```