# ig-nodejs-02


```bash
 yarn global add typescript     
```


migration
para rodar migration é preciso mudar o host para localhost temporariamente

```bash
 npx typeorm-ts-node-commonjs migration:run -d ./src/database/index.ts 
```

Para reverter a migratioon realizada
```bash
npx typeorm-ts-node-commonjs migration:revert -d ./src/database/index.ts 
```