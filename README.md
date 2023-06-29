# Vector

Vector is a highly lightweight utility, served as an addition to Roblox's traditional Vector2 / Vector3 libraries.

## Installation

### 📦 — NPM:

```
npm i @rbxts/vector
```

### 🧶 — Yarn:

```
yarn add @rbxts/vector
```

### 📀 — pnPM:

```
pnpm add @rbxts/vector
```

## Vector API

### `Vector.FromVector2XY`

```ts
function FromVector2XY<T extends Vector>(vector2: Vector2): Vector3 | T;
```

Create a Vector3 from a Vector2 within the XY plane.

### `Vector.FromVector2XZ`

```ts
function FromVector2XZ<T extends Vector>(vector2: Vector2): Vector3 | T;
```

Create a Vector3 from a Vector2 within the XZ plane.

### `Vector.GetAngleRad`

```ts
function GetAngleRad<T extends Vector>(vectorA: Vector2, vectorB: Vector2): number | T;
```

Compute the angle between two vectors in radians.

### `Vector.AngleBetweenVectors`

```ts
function AngleBetweenVectors<T extends Vector>(vectorA: Vector2, vectorB: Vector2): number | T;
```

Compute the angle between two vectors.

### `Vector.Round`

```ts
function Round<T extends Vector>(vectorA: Vector3, amount: number): Vector3 | T;
```

Round the Vector3 to the nearest number.

### `Vector.ClampMagnitude`

```ts
function ClampMagnitude<T extends Vector>(vectorA: Vector, amount: number): number | T;
```

Clamp the magnitude of a vector so it is only a certain length.

### `Vector.AngleBetween`

```ts
function AngleBetween<T extends Vector>(vectorA: Vector, vectorB: Vector): number | T;
```

Finds the angle in radians between two vectors.

### `Vector.AngleBetweenSigned`

```ts
function AngleBetweenSigned<T extends Vector>(vectorA: Vector, vectorB: Vector, axisVector: Vector): number | T;
```

Return a random unit vector (could be used for equal distribution around a sphere).

### `Vector.GetRandomUnitVector`

```ts
function GetRandomUnitVector<T extends Vector3>(): Vector3 | T;
```

Return a random unit vector (could be used for equal distribution around a sphere).

## Example

```ts
// Services
import { Workspace } from "@rbxts/services";

// Modules
import { GetRandomUnitVector, AngleBetweenSigned } from "@rbxts/vector";

// Functions
const Part = new Instance("Part");
Part.Name = "Part";
Part.Position = GetRandomUnitVector();
Part.Size = GetRandomUnitVector();
Part.Parent = Workspace;

const angleBetweenSigned = AngleBetweenSigned(Part.Position, Part.Size, new Vector3(1, 1, 1));

print(angleBetweenSigned);
```
