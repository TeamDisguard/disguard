export class BitField<T extends BitFieldResolvable> implements BitFieldObject {
  /**
   * The bitfield data
   */
  public bitfield: number;

  /**
   * @param bits The base bits
   */
  public constructor(bits?: T) {
    this.bitfield = (this.constructor as typeof BitField).resolve<T>(bits);
  }

  /**
   * Check if this BitField matches another bitfield resolvable
   * @param bit The bit(s) to check
   */
  public equals(bit: T): boolean {
    return this.bitfield === (this.constructor as typeof BitField).resolve(bit);
  }

  /**
   * Checks if this BitField has a bit or bits
   * @param bit The bit(s) to check
   */
  public has(bit: T): boolean {
    const bits = (this.constructor as typeof BitField).resolve<T>(bit);
    return (this.bitfield & bits) === bits;
  }

  /**
   * Get any bits this BitField is missing
   * @param bits The bit(s) to check for
   */
  public missing(bits: T): string[] {
    return new (this.constructor as typeof BitField)(bits)
      .remove(this.bitfield as T)
      .toArray();
  }

  /**
   * Freezes this BitField
   */
  public freeze(): this {
    return Object.freeze(this);
  }

  /**
   * Adds a bit to this BitField or a new Bitfield if this is frozen
   * @param bits The bit(s) to add
   */
  public add(...bits: T[]): BitField<T> {
    const total = bits.reduce(
      (acc, bit) => acc | (this.constructor as typeof BitField).resolve<T>(bit),
      0
    );
    if (Object.isFrozen(this))
      return new (this.constructor as typeof BitField)<T>((this.bitfield | total) as T);
    this.bitfield |= total;
    return this;
  }

  /**
   * Removes a bit to this BitField or a new Bitfield if this is frozen
   * @param bits The bit(s) to remove
   */
  public remove(...bits: T[]): BitField<T> {
    const total = bits.reduce(
      (acc, bit) => acc | (this.constructor as typeof BitField).resolve<T>(bit),
      0
    );
    if (Object.isFrozen(this))
      return new (this.constructor as typeof BitField)<T>((this.bitfield & ~total) as T);
    this.bitfield &= ~total;
    return this;
  }

  /**
   * Returns only the bits in common between this bitfield and the passed bits.
   * @param bits The bit(s) to mask
   */
  public mask(...bits: T[]): BitField<T> {
    const total = bits.reduce(
      (acc, bit) => acc | (this.constructor as typeof BitField).resolve<T>(bit),
      0
    );
    if (Object.isFrozen(this))
      return new (this.constructor as typeof BitField)<T>((this.bitfield & total) as T);
    this.bitfield &= total;
    return this;
  }

  /**
   * Returns an object of flags: boolean
   */
  public serialize(): Record<string, boolean> {
    const serialized: Record<string, boolean> = {};
    for (const bit of Object.keys((this.constructor as typeof BitField).FLAGS))
      serialized[bit] = this.has(bit as T);
    return serialized;
  }

  /**
   * Returns an array of Flags that make up this BitField
   */
  public toArray(): string[] {
    return Object.keys((this.constructor as typeof BitField).FLAGS).filter((bit) =>
      this.has(bit as T)
    );
  }

  /**
   * Defines what this Bitfield is when converted to JSON
   */
  public toJSON(): number {
    return this.bitfield;
  }

  /**
   * Defines value behavior of this BitField
   */
  public valueOf(): number {
    return this.bitfield;
  }

  /**
   * Defines iterable behavior for BitFields
   */
  public *[Symbol.iterator](): IterableIterator<string> {
    yield* this.toArray();
  }

  /**
   * Flags for this BitField (Should be implemented in child classes)
   */
  public static FLAGS: Record<string, number> = {} as const;

  /**
   * The default flags for the bitfield
   */
  public static DEFAULT = 0;

  /**
   * The value of all bits in this bitfield
   */
  public static get ALL(): number {
    return Object.values<number>(this.FLAGS).reduce((all, byte) => all | byte, 0);
  }

  /**
   * Resolves a BitFieldResolvable into a number
   * @param bit The bit(s) to resolve
   */
  public static resolve<T extends BitFieldResolvable>(bit?: T): number {
    if (typeof bit === "undefined") return 0;
    if (typeof bit === "number" && bit >= 0) return bit;
    if (bit instanceof BitField) return bit.bitfield;
    if (Array.isArray(bit))
      return (bit as (string | number | BitFieldObject)[])
        .map((byte) => this.resolve(byte))
        .reduce((bytes, byte) => bytes | byte, 0);
    if (typeof bit === "string") return this.FLAGS[bit];
    throw new RangeError(`An invalid bit was provided. Received: ${typeof bit}`);
  }
}

export interface BitFieldObject {
  bitfield: number;
}

export type BitFieldResolvable =
  | string
  | number
  | BitFieldObject
  | (string | number | BitFieldObject)[];
