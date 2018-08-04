"use strict";

import { Controller, Get } from "@nestjs/common";

@Controller("blogs")
export class BlogsController {
  @Get()
  findAll() {
    return "This return all blogs";
  }
}
