/* eslint-disable prettier/prettier */
/* archivo: src/museum/museum.entity.ts */
import { ArtworkEntity } from '../artwork/artwork.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ExhibitionEntity } from '../exhibition/exhibition.entity';

@Entity()
export class MuseumEntity {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   name: string;
   @Column()
   description: string;
   @Column()
   address: string;
   @Column()
   city: string;
   @Column()
   image: string;

   @OneToMany(() => ExhibitionEntity, exhibition => exhibition.museum)
   exhibitions: ExhibitionEntity[];

   @OneToMany(() => ArtworkEntity, artwork => artwork.museum)
   artworks: ArtworkEntity[];

}


/* archivo: src/museum/museum.entity.ts */