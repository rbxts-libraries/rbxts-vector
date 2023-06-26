// Vector.d
// Written by Demo (R0BL0XIAN_D3M0)
// [https://www.roblox.com/users/289025524/profile]
// 05/30/2023

// Types
type Vector = Vector2 | Vector3;

/**
	@within Vector

	@function FromVector2XY

	@param vector Vector2 -- The Vector2.

	@return Vector3 -- Return the newly created Vector3.

	Create a Vector3 from a Vector2 within the XY plane.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local fromVector2XY: Vector3 = Vector.FromVector2XY(Vector2.new(1, 1))
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const fromVector2XY: Vector3 = Vector.FromVector2XY(new Vector2(1, 1))
	```
*/
export function FromVector2XY<T extends Vector>(vector2: Vector2): Vector3 | T;

/**
	@within Vector

	@function FromVector2XZ

	@param vector Vector2 -- The Vector2.

	@return Vector3 -- Return the newly created Vector3.

	Create a Vector3 from a Vector2 within the XZ plane.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local fromVector2XZ: Vector3 = Vector.FromVector2XZ(Vector2.new(1, 1))
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const fromVector2XZ: Vector3 = Vector.FromVector2XZ(new Vector2(1, 1))
	```
*/
export function FromVector2XZ<T extends Vector>(vector2: Vector2): Vector3 | T;

/**
	@within Vector

	@function GetAngleRad

	@param vectorA Vector2 -- The initial Vector2.

	@param vectorB Vector2 -- The secondary Vector2.

	@return number -- Return the computed angle in a numerical form.

	Compute the angle between two vectors in radians.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local angleRadian: number = Vector.GetAngleRad(Vector2.new(1, 1), Vector2.new(2, 2))
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const angleRadian: number = Vector.GetAngleRad(new Vector2(1, 1), new Vector2(2, 2))
	```
*/
export function GetAngleRad<T extends Vector>(vectorA: Vector2, vectorB: Vector2): number | T;

/**
	@within Vector

	@function AngleBetweenVectors

	@param vectorA Vector2 -- The initial Vector2.

	@param vectorB Vector2 -- The secondary Vector2.

	@return number -- Return the computed angle in a numerical form.

	Compute the angle between two vectors.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local angleBetweenVectors: number = Vector.AngleBetweenVectors(Vector2.new(1, 1), Vector2.new(2, 2))
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const angleBetweenVectors: number = Vector.AngleBetweenVectors(new Vector2(1, 1), new Vector2(2, 2))
	```
*/
export function AngleBetweenVectors<T extends Vector>(vectorA: Vector2, vectorB: Vector2): number | T;

/**
	@within Vector

	@function Round

	@param vectorA Vector3 -- The Vector3.

	@param amount number -- The primary amount.

	@return Vector3 -- Return the rounded Vector3.

	Round the Vector3 to the nearest number.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local roundedVector3: Vector3 = Vector.Round(Vector3.new(5, 1, 5), 2)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const roundedVector3: Vector3 = Vector.Round(new Vector3(5, 1, 5), 2)
	```
*/
export function Round<T extends Vector>(vectorA: Vector3, amount: number): Vector3 | T;

/**
	@within Vector

	@function ClampMagnitude

	@param vectorA Vector -- The vector.

	@param amount number -- The maximum magnitude.

	@return number -- Return the clamped magnitude.

	Clamp the magnitude of a vector so it is only a certain length.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local clampedMagnitude: number = Vector.ClampMagnitude(Vector3.new(5, 1, 5), 2)
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const clampedMagnitude: number = Vector.ClampMagnitude(new Vector3(5, 1, 5), 2)
	```
*/
export function ClampMagnitude<T extends Vector>(vectorA: Vector, amount: number): number | T;

/**
	@within Vector

	@function AngleBetween

	@param vectorA Vector -- The primary vector.

	@param vectorB Vector -- The secondary vector.

	@return number -- Return the radianed angle.

	Finds the angle in radians between two vectors.

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local angleBetween: number = Vector.AngleBetween(Vector3.new(1, 0, 1), Vector3.new(2, 1, 2))
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const angleBetween: number = Vector.AngleBetween(new Vector3(1, 0, 1), new Vector3(2, 1, 2))
	```
*/
export function AngleBetween<T extends Vector>(vectorA: Vector, vectorB: Vector): number | T;

/**
	@within Vector

	@function AngleBetweenSigned

	@param vectorA Vector -- The primary vector.

	@param vectorB Vector -- The secondary vector.

	@param axisVector Vector -- The axis vector.

	@return number -- Return the radianed angle.

	Return a random unit vector (could be used for equal distribution around a sphere).

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local angleBetweenSigned: number = Vector.AngleBetweenSigned(Vector3.new(1, 0, 1), Vector3.new(2, 1, 2), Vector3.new(1, 1, 1))
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const angleBetweenSigned: number = Vector.AngleBetweenSigned(new Vector3(1, 0, 1), new Vector3(2, 1, 2), new Vector3(1, 1, 1))
	```
*/
export function AngleBetweenSigned<T extends Vector>(
	vectorA: Vector,
	vectorB: Vector,
	axisVector: Vector,
): number | T;

/**
	@within Vector

	@function GetRandomUnitVector

	@return Vector3 -- Return the random Vector3.

	Return a random unit vector (could be used for equal distribution around a sphere).

	### Luau:
	```lua
		--// Functions
		--// Placeholder code.
		local randomUnitVector: Vector3 = Vector.GetRandomUnitVector()
	```

	### TypeScript:
	```ts
		// Functions
		// Placeholder code.
		const randomUnitVector: Vector3 = Vector.GetRandomUnitVector()
	```
*/
export function GetRandomUnitVector<T extends Vector3>(): Vector3 | T;
