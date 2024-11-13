import { SourceTextModule } from "vm"

export default function Home() {
  /* Typescript Basics */

  // Datatypes
  const name = "" // Implicit Type = string (AVOID IMPLICIT TYPING)
  const studentName: string = "Benny" // string
  const studentAge: number = 15 // Int, Double, Floating-point
  const studentIsEnrolled: boolean = true // boolean

  /* Datatype + [] = array of datatype */
  const scoreList: number[] = [] // Array of numbers
  const nameCatalog: string[] = [] // Array of strings
  const nameList: Array<string> = [] // Alternative Way to define an array

  // Use of multiple types, can get complicated
  let multipleDatatypes: [string, number]
  multipleDatatypes = ["", 0]

  // OR (Not forced to include BOTH datatypes)
  // TODO - Why both datatypes?
  let typeOrType: [string | number]
  typeOrType = [""]

  // Enum - Final Values
  // Const enums - Ban?
  enum Roles {
    Guest,
    User,
    Admin,
  }

  // Without enums
  const arvid: string = "Admin"
  const linda: string = "Guest"
  const linnea: string = "Gueest" // More probable to be incorrect

  const benny: Roles = Roles.Guest // No Permission to View Content
  const frida: Roles = Roles.User // Permission to View Content
  const tomas: Roles = Roles.Admin // Permission to DELETE & View content
  const lenny = Roles.Admin // AVOID IMPLICIT TYPING
  // const lennart: Roles = "Roles.Admin" // Capture Error BEFORE running application

  // const customValue = objectConversionFunction() // (User, UserDTO, SerializedUser, TimeDate, "", number)

  // Enums are actually lists (arrays)
  // By default, without initializing values, they get a value of 0 and above
  enum WeatherConditions {
    Sun = "SUN",
    Rain = "RAIN",
    Fog = "FOG",
    Thunder = "THUNDER",
    Storm = "STORM",
    Tornado = "TORNADO",
  }

  const todaysWeather: WeatherConditions = WeatherConditions.Fog

  // Loop through an enum
  function iterateThroughWeathers() {
    Object.keys(WeatherConditions).map((weather) => console.log(weather))
  }

  iterateThroughWeathers()

  enum Month {
    January,
    February,
    March,
    April,
  }

  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
  }

  enum Queries {
    Select,
    From,
    Where,
  }

  // Why does ANY exist? A: For JavaScript to Typescript refactoring
  const IDontKnow: any = ""
  const IDontKnow2: any = 0

  // No return = void (can be avoided during function creation)
  function sayHello(): void {
    console.log("Hello world")
  }

  // callback (a function, calls another function)
  function algorithm(algorithm: () => void) {}
  // algorithm(console.log())

  // Objects (Variables can become objects)
  let customUser: {
    username: string
    password: string
    printDetails: () => void
  } = {
    username: "",
    password: "",
    printDetails: function (): void {
      console.log(this.username, this.password)
    },
  }

  customUser.printDetails()

  // interface
  interface CustomUser {
    username: string
    password: string
    printDetails: () => void
  }

  // Interface Approach
  const customUser2: CustomUser = {
    username: "benny",
    password: "123",
    printDetails: function (): void {
      throw new Error("Function not implemented.")
    },
  }

  const userList: CustomUser[] = [customUser2]
  const userList2: Array<CustomUser> = [customUser2]

  return <div></div>
}
