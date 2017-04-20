package com.csgb.etatcivil.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

import com.csgb.etatcivil.domain.enumeration.Genre;

/**
 * A Personne.
 */
@Entity
@Table(name = "personne")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "personne")
public class Personne implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "nom", nullable = false)
    private String nom;

    @NotNull
    @Column(name = "prenom", nullable = false)
    private String prenom;

    @Column(name = "fonction")
    private String fonction;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "genre", nullable = false)
    private Genre genre;

    @NotNull
    @Column(name = "date_naissance", nullable = false)
    private ZonedDateTime dateNaissance;

    @ManyToOne
    private Personne pere;

    @ManyToOne
    private Personne mere;

    @ManyToOne(optional = false)
    @NotNull
    private Adresse adresse;

    @ManyToOne(optional = false)
    @NotNull
    private Pays paysNaissance;

    @ManyToOne(optional = false)
    @NotNull
    private Ville villeNaissance;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public Personne nom(String nom) {
        this.nom = nom;
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public Personne prenom(String prenom) {
        this.prenom = prenom;
        return this;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getFonction() {
        return fonction;
    }

    public Personne fonction(String fonction) {
        this.fonction = fonction;
        return this;
    }

    public void setFonction(String fonction) {
        this.fonction = fonction;
    }

    public Genre getGenre() {
        return genre;
    }

    public Personne genre(Genre genre) {
        this.genre = genre;
        return this;
    }

    public void setGenre(Genre genre) {
        this.genre = genre;
    }

    public ZonedDateTime getDateNaissance() {
        return dateNaissance;
    }

    public Personne dateNaissance(ZonedDateTime dateNaissance) {
        this.dateNaissance = dateNaissance;
        return this;
    }

    public void setDateNaissance(ZonedDateTime dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public Personne getPere() {
        return pere;
    }

    public Personne pere(Personne personne) {
        this.pere = personne;
        return this;
    }

    public void setPere(Personne personne) {
        this.pere = personne;
    }

    public Personne getMere() {
        return mere;
    }

    public Personne mere(Personne personne) {
        this.mere = personne;
        return this;
    }

    public void setMere(Personne personne) {
        this.mere = personne;
    }

    public Adresse getAdresse() {
        return adresse;
    }

    public Personne adresse(Adresse adresse) {
        this.adresse = adresse;
        return this;
    }

    public void setAdresse(Adresse adresse) {
        this.adresse = adresse;
    }

    public Pays getPaysNaissance() {
        return paysNaissance;
    }

    public Personne paysNaissance(Pays pays) {
        this.paysNaissance = pays;
        return this;
    }

    public void setPaysNaissance(Pays pays) {
        this.paysNaissance = pays;
    }

    public Ville getVilleNaissance() {
        return villeNaissance;
    }

    public Personne villeNaissance(Ville ville) {
        this.villeNaissance = ville;
        return this;
    }

    public void setVilleNaissance(Ville ville) {
        this.villeNaissance = ville;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Personne personne = (Personne) o;
        if (personne.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, personne.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Personne{" +
            "id=" + id +
            ", nom='" + nom + "'" +
            ", prenom='" + prenom + "'" +
            ", fonction='" + fonction + "'" +
            ", genre='" + genre + "'" +
            ", dateNaissance='" + dateNaissance + "'" +
            '}';
    }
}
