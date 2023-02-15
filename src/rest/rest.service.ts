import { Injectable } from '@nestjs/common';
import { CreateRestDto } from './dto/create-rest.dto';
import { UpdateRestDto } from './dto/update-rest.dto';

@Injectable()
export class RestService {
    private restsData = [
        { id: 0, name: 'Smart', job: 'banker' },
        { id: 1, name: 'Raysam', job: 'developer' }
    ]

    getRests(job?: 'Coder' | 'Developer' | 'Engineer') {
        if (job) {
            return this.restsData.filter((rest) => rest.job === job);
        }
        return this.restsData;
    }


    getRest(id: number) {
        const rest = this.restsData.find((rest) => rest.id === id);
        if (!rest) {
            throw new Error(" Rest not found");
        }
        return rest
    }

    createRest(createRestdto: CreateRestDto) {

        const newRest = {
            ...createRestdto,
            id: Date.now(),
        }
        this.restsData.push(newRest);
        return newRest;
    }

    updateRest(id: number, updateRestDto: UpdateRestDto) {
      this.restsData =  this.restsData.map((rest) => {
            if (rest.id === id) {
                return { ...rest, ...updateRestDto };
            }
            return rest;
        });
        return this.getRest(id);
    }

    removeRest(id: number) {
        const toBeRemoved = this.getRest(id);

        this.restsData = this.restsData.filter((rest) => rest.id !== id);
        return toBeRemoved;
    }



}
