// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("tokenID", Value.fromBigInt(BigInt.zero()));
    this.set("tokenURI", Value.fromString(""));
    this.set("externalURL", Value.fromString(""));
    this.set("image", Value.fromString(""));
    this.set("name", Value.fromString(""));
    this.set("description", Value.fromString(""));
    this.set("type", Value.fromString(""));
    this.set("updatedAtTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromString(""));
    this.set("background", Value.fromString(""));
    this.set("skinTone", Value.fromString(""));
    this.set("bodyShape", Value.fromString(""));
    this.set("top", Value.fromString(""));
    this.set("eyebrows", Value.fromString(""));
    this.set("eyeStyle", Value.fromString(""));
    this.set("eyeColor", Value.fromString(""));
    this.set("mouth", Value.fromString(""));
    this.set("hairFront", Value.fromString(""));
    this.set("hairBack", Value.fromString(""));
    this.set("hairColor", Value.fromString(""));
    this.set("hat", Value.fromString(""));
    this.set("necklace", Value.fromString(""));
    this.set("archetypeOfPower", Value.fromString(""));
    this.set("sunSign", Value.fromString(""));
    this.set("moonSign", Value.fromString(""));
    this.set("risingSign", Value.fromString(""));
    this.set("will", Value.fromBigInt(BigInt.zero()));
    this.set("wisdom", Value.fromBigInt(BigInt.zero()));
    this.set("wonder", Value.fromBigInt(BigInt.zero()));
    this.set("woe", Value.fromBigInt(BigInt.zero()));
    this.set("wiles", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Token entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenID(): BigInt {
    let value = this.get("tokenID");
    return value!.toBigInt();
  }

  set tokenID(value: BigInt) {
    this.set("tokenID", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get externalURL(): string {
    let value = this.get("externalURL");
    return value!.toString();
  }

  set externalURL(value: string) {
    this.set("externalURL", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get updatedAtTimestamp(): BigInt {
    let value = this.get("updatedAtTimestamp");
    return value!.toBigInt();
  }

  set updatedAtTimestamp(value: BigInt) {
    this.set("updatedAtTimestamp", Value.fromBigInt(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get background(): string {
    let value = this.get("background");
    return value!.toString();
  }

  set background(value: string) {
    this.set("background", Value.fromString(value));
  }

  get skinTone(): string {
    let value = this.get("skinTone");
    return value!.toString();
  }

  set skinTone(value: string) {
    this.set("skinTone", Value.fromString(value));
  }

  get bodyShape(): string {
    let value = this.get("bodyShape");
    return value!.toString();
  }

  set bodyShape(value: string) {
    this.set("bodyShape", Value.fromString(value));
  }

  get top(): string {
    let value = this.get("top");
    return value!.toString();
  }

  set top(value: string) {
    this.set("top", Value.fromString(value));
  }

  get eyebrows(): string {
    let value = this.get("eyebrows");
    return value!.toString();
  }

  set eyebrows(value: string) {
    this.set("eyebrows", Value.fromString(value));
  }

  get eyeStyle(): string {
    let value = this.get("eyeStyle");
    return value!.toString();
  }

  set eyeStyle(value: string) {
    this.set("eyeStyle", Value.fromString(value));
  }

  get eyeColor(): string {
    let value = this.get("eyeColor");
    return value!.toString();
  }

  set eyeColor(value: string) {
    this.set("eyeColor", Value.fromString(value));
  }

  get mouth(): string {
    let value = this.get("mouth");
    return value!.toString();
  }

  set mouth(value: string) {
    this.set("mouth", Value.fromString(value));
  }

  get hairFront(): string {
    let value = this.get("hairFront");
    return value!.toString();
  }

  set hairFront(value: string) {
    this.set("hairFront", Value.fromString(value));
  }

  get hairBack(): string {
    let value = this.get("hairBack");
    return value!.toString();
  }

  set hairBack(value: string) {
    this.set("hairBack", Value.fromString(value));
  }

  get hairColor(): string {
    let value = this.get("hairColor");
    return value!.toString();
  }

  set hairColor(value: string) {
    this.set("hairColor", Value.fromString(value));
  }

  get hat(): string {
    let value = this.get("hat");
    return value!.toString();
  }

  set hat(value: string) {
    this.set("hat", Value.fromString(value));
  }

  get necklace(): string {
    let value = this.get("necklace");
    return value!.toString();
  }

  set necklace(value: string) {
    this.set("necklace", Value.fromString(value));
  }

  get archetypeOfPower(): string {
    let value = this.get("archetypeOfPower");
    return value!.toString();
  }

  set archetypeOfPower(value: string) {
    this.set("archetypeOfPower", Value.fromString(value));
  }

  get sunSign(): string {
    let value = this.get("sunSign");
    return value!.toString();
  }

  set sunSign(value: string) {
    this.set("sunSign", Value.fromString(value));
  }

  get moonSign(): string {
    let value = this.get("moonSign");
    return value!.toString();
  }

  set moonSign(value: string) {
    this.set("moonSign", Value.fromString(value));
  }

  get risingSign(): string {
    let value = this.get("risingSign");
    return value!.toString();
  }

  set risingSign(value: string) {
    this.set("risingSign", Value.fromString(value));
  }

  get will(): BigInt {
    let value = this.get("will");
    return value!.toBigInt();
  }

  set will(value: BigInt) {
    this.set("will", Value.fromBigInt(value));
  }

  get wisdom(): BigInt {
    let value = this.get("wisdom");
    return value!.toBigInt();
  }

  set wisdom(value: BigInt) {
    this.set("wisdom", Value.fromBigInt(value));
  }

  get wonder(): BigInt {
    let value = this.get("wonder");
    return value!.toBigInt();
  }

  set wonder(value: BigInt) {
    this.set("wonder", Value.fromBigInt(value));
  }

  get woe(): BigInt {
    let value = this.get("woe");
    return value!.toBigInt();
  }

  set woe(value: BigInt) {
    this.set("woe", Value.fromBigInt(value));
  }

  get wiles(): BigInt {
    let value = this.get("wiles");
    return value!.toBigInt();
  }

  set wiles(value: BigInt) {
    this.set("wiles", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokens(): Array<string> {
    let value = this.get("tokens");
    return value!.toStringArray();
  }

  set tokens(value: Array<string>) {
    this.set("tokens", Value.fromStringArray(value));
  }
}
