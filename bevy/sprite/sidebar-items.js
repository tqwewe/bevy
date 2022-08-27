window.SIDEBAR_ITEMS = {"constant":[["COLOR_MATERIAL_SHADER_HANDLE",""],["MESH2D_BINDINGS_HANDLE",""],["MESH2D_FUNCTIONS_HANDLE",""],["MESH2D_SHADER_HANDLE",""],["MESH2D_TYPES_HANDLE",""],["MESH2D_VERTEX_OUTPUT",""],["MESH2D_VIEW_BINDINGS_HANDLE",""],["MESH2D_VIEW_TYPES_HANDLE",""],["SPRITE_SHADER_HANDLE",""]],"enum":[["Anchor","How a sprite is positioned relative to its `Transform`. It defaults to `Anchor::Center`."],["SpriteSystem",""],["TextureAtlasBuilderError",""]],"fn":[["extract_mesh2d",""],["extract_sprite_events",""],["extract_sprites",""],["queue_material2d_meshes",""],["queue_mesh2d_bind_group",""],["queue_mesh2d_view_bind_groups",""],["queue_sprites",""]],"mod":[["collide_aabb","Utilities for detecting if and on which side two axis-aligned bounding boxes (AABB) collide."],["prelude",""]],"struct":[["ColorMaterial","A 2d material that renders 2d meshes with a texture tinted by a uniform color"],["ColorMaterialFlags",""],["ColorMaterialPlugin",""],["ColorMaterialUniform","The GPU representation of the uniform data of a [`ColorMaterial`]."],["DrawMesh2d",""],["DrawSpriteBatch",""],["DynamicTextureAtlasBuilder",""],["ExtractedSprite",""],["ExtractedSprites",""],["ImageBindGroups",""],["Material2dKey",""],["Material2dPipeline","Render pipeline data for a given [`Material2d`]"],["Material2dPlugin","Adds the necessary ECS resources and render logic to enable rendering entities using the given [`Material2d`] asset type (which includes [`Material2d`] types)."],["MaterialMesh2dBundle","A component bundle for entities with a [`Mesh2dHandle`] and a [`Material2d`]."],["Mesh2dBindGroup",""],["Mesh2dHandle","Component for rendering with meshes in the 2d pipeline, usually with a 2d material such as `ColorMaterial`."],["Mesh2dPipeline",""],["Mesh2dPipelineKey",""],["Mesh2dRenderPlugin",""],["Mesh2dUniform",""],["Mesh2dViewBindGroup",""],["PrepareNextFrameMaterials","All [`Material2d`] values of a given type that should be prepared next frame."],["PreparedMaterial2d","Data prepared for a [`Material2d`] instance."],["Rect","A rectangle defined by two points. There is no defined origin, so 0,0 could be anywhere (top-left, bottom-left, etc)"],["RenderMaterials2d","Stores all prepared representations of [`Material2d`] assets for as long as they exist."],["SetMaterial2dBindGroup",""],["SetMesh2dBindGroup",""],["SetMesh2dViewBindGroup",""],["SetSpriteTextureBindGroup",""],["SetSpriteViewBindGroup",""],["Sprite",""],["SpriteAssetEvents",""],["SpriteBatch",""],["SpriteBundle",""],["SpriteMeta",""],["SpritePipeline",""],["SpritePipelineKey",""],["SpritePlugin",""],["SpriteSheetBundle","A Bundle of components for drawing a single sprite from a sprite sheet (also referred to as a `TextureAtlas`)"],["TextureAtlas","An atlas containing multiple textures (like a spritesheet or a tilemap). Example usage animating sprite. Example usage loading sprite sheet."],["TextureAtlasBuilder","A builder which is used to create a texture atlas from many individual sprites."],["TextureAtlasSprite",""]],"trait":[["Material2d","Materials are used alongside [`Material2dPlugin`] and [`MaterialMesh2dBundle`] to spawn entities that are rendered with a specific [`Material2d`] type. They serve as an easy to use high level way to render [`Mesh2dHandle`] entities with custom shader logic."]],"type":[["ColorMesh2dBundle","A component bundle for entities with a `Mesh2dHandle` and a [`ColorMaterial`]."],["DrawSprite",""],["TextureAtlasBuilderResult",""]]};