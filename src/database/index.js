import * as SQLite from 'expo-sqlite'


const db = SQLite.openDatabase("session.db")

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY KEY NOT NULL, email TEXT NOT NULL, IdToken TEXT NOT NULL)",
                [],
                ()=> resolve(),
                (_,err)=> {reject(err)}
            )
        })
    })
    return promise
}

export const insertSession = ({
    email,
    localId,
    idToken
}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "INSERT INTO sessions (email, localId, Idtoken) VALUES(?, ?, ?);",
                [email,localId,idToken],
                (_, result)=> resolve(result),
                (_, err)=> reject(err)
            )
        })
    })
    return promise
}

export const fetchSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "SELECT * FROM sessions",
                [],
                (_, result)=> resolve(result),
                (_, err)=> reject(err)
            )
        })
    })
    return promise
}

export const deleteSession = ({localId}) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM sessions WHERE localId = ?",
                [localId],
                (_, result)=> resolve(result),
                (_, err)=> reject(err)
            )
        })
    })
    return promise
}

export const deleteAllSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM sessions",
                [],
                (_, result)=> resolve(result),
                (_, err)=> reject(err)
            )
        })
    })
    return promise
}