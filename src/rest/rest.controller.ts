import { Controller, Get, Post, Put, Delete, Param, Query, Body, NotFoundException } from '@nestjs/common';
import { CreateRestDto } from './dto/create-rest.dto';
import { UpdateRestDto } from './dto/update-rest.dto';
import { RestService } from './rest.service';

@Controller('rest')
export class RestController {
    constructor(private readonly restService:RestService){}
    @Get()
    getRests(@Query('job') job: 'banker' | 'developer') {
        return  this.restService.getRests(job);
    }

    @Get(':id') 
    getRest(@Param('id') id: string){
        try {
              return this.restService.getRest(+id);
        } catch (error) {
            throw new NotFoundException();   //more can be found in nestjs documentation
        }
      
    }

    @Post()
    createRest(@Body() createRestDto : CreateRestDto){
        return this.restService.createRest(createRestDto);
    }

    @Put(':id')
    updateRest(@Param('id') id: string,  @Body() updateRestDto: UpdateRestDto){
        return this.restService.updateRest(+id, updateRestDto);
    }

    @Delete(':id')
    deleteRest(@Param('id') id: string){
        return this.restService.removeRest(+id);
    }

}



