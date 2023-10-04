import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig({
  projectId: 'm8s1j0ly',
  dataset: 'production',
  title: 'Gallery POC',
  apiVersion: '2023-03-09',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config
