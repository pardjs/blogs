"use strict";

import { Module } from "@nestjs/common";
import { BlogsController } from "./controller";
import { BlogsService } from "./service";

@Module({
  controllers: [BlogsController],
  providers: [BlogsService]
})
export class BlogsModule {}
