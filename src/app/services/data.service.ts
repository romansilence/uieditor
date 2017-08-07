import { Injectable } from '@angular/core';

import { blocks, blockTypes } from '../data';

@Injectable()
export class DataService {
  blocks: any = blocks; 
  blockTypes: any = blockTypes;
  
  getBlocks() {
    return this.blocks;
  }

  getBlockTypes() {
    return this.blockTypes;
  }

  getTypesOfBlocks() {
    return this.blockTypes.map((block) => block["type"]);
  }  

  findBlockByType(type: string) {
    return this.blockTypes.find((block) => block.type == type);
  }

  update(blocks) {
    if (this.isJsonString(blocks)) {
      this.blocks = JSON.parse(blocks);
    }
  }

  delete(index: number) {
    this.blocks.splice(index, 1);
  }

  create(type: string) {
    let newBlock = this.findBlockByType(type);
    this.blocks.push(JSON.parse(JSON.stringify(newBlock)));
  }

  isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
  }
}
