const crypto = require('crypto').createHash('sha256')
import * as bcrypt from 'bcrypt'

// private method
const createHash = (plain: string) => crypto.update(plain).digest('hex')

class Password {
  static async signature (plain: string): Promise<string> {
    const hash = await bcrypt.hash(createHash(plain), 12)

    return hash
  }

  static async isValid (plain: string, target: string): Promise<boolean> {
    const isEqual = await bcrypt.compare(createHash(plain), target)

    return isEqual
  }
}

export default Password
