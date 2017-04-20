package com.csgb.etatcivil.domain;

import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;
import org.springframework.data.elasticsearch.annotations.Document;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

/**
 * A Naissance.
 */
@Entity
@Table(name = "naissance")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "naissance")
public class Naissance implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "numero_registre", nullable = false)
    private String numeroRegistre;

    @NotNull
    @Size(min = 5, max = 1000)
    @Lob
    @Column(name = "mention_marginale", length = 1000, nullable = false)
    private String mentionMarginale;

    @NotNull
    @Column(name = "date_declaration", nullable = false)
    private ZonedDateTime dateDeclaration;

    @ManyToOne(optional = false)
    @NotNull
    private User agentDeclarant;

    @ManyToOne(optional = false)
    @NotNull
    private Personne pere;

    @ManyToOne(optional = false)
    @NotNull
    private Personne mere;

    @ManyToOne(optional = false)
    @NotNull
    private Personne enfant;

    @ManyToOne(optional = false)
    @NotNull
    private Ville lieuDeclaration;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNumeroRegistre() {
        return numeroRegistre;
    }

    public Naissance numeroRegistre(String numeroRegistre) {
        this.numeroRegistre = numeroRegistre;
        return this;
    }

    public void setNumeroRegistre(String numeroRegistre) {
        this.numeroRegistre = numeroRegistre;
    }

    public String getMentionMarginale() {
        return mentionMarginale;
    }

    public Naissance mentionMarginale(String mentionMarginale) {
        this.mentionMarginale = mentionMarginale;
        return this;
    }

    public void setMentionMarginale(String mentionMarginale) {
        this.mentionMarginale = mentionMarginale;
    }

    public ZonedDateTime getDateDeclaration() {
        return dateDeclaration;
    }

    public Naissance dateDeclaration(ZonedDateTime dateDeclaration) {
        this.dateDeclaration = dateDeclaration;
        return this;
    }

    public void setDateDeclaration(ZonedDateTime dateDeclaration) {
        this.dateDeclaration = dateDeclaration;
    }

    public User getAgentDeclarant() {
        return agentDeclarant;
    }

    public Naissance agentDeclarant(User user) {
        this.agentDeclarant = user;
        return this;
    }

    public void setAgentDeclarant(User user) {
        this.agentDeclarant = user;
    }

    public Personne getPere() {
        return pere;
    }

    public Naissance pere(Personne personne) {
        this.pere = personne;
        return this;
    }

    public void setPere(Personne personne) {
        this.pere = personne;
    }

    public Personne getMere() {
        return mere;
    }

    public Naissance mere(Personne personne) {
        this.mere = personne;
        return this;
    }

    public void setMere(Personne personne) {
        this.mere = personne;
    }

    public Personne getEnfant() {
        return enfant;
    }

    public Naissance enfant(Personne personne) {
        this.enfant = personne;
        return this;
    }

    public void setEnfant(Personne personne) {
        this.enfant = personne;
    }

    public Ville getLieuDeclaration() {
        return lieuDeclaration;
    }

    public Naissance lieuDeclaration(Ville ville) {
        this.lieuDeclaration = ville;
        return this;
    }

    public void setLieuDeclaration(Ville ville) {
        this.lieuDeclaration = ville;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Naissance naissance = (Naissance) o;
        if (naissance.id == null || id == null) {
            return false;
        }
        return Objects.equals(id, naissance.id);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(id);
    }

    @Override
    public String toString() {
        return "Naissance{" +
            "id=" + id +
            ", numeroRegistre='" + numeroRegistre + "'" +
            ", mentionMarginale='" + mentionMarginale + "'" +
            ", dateDeclaration='" + dateDeclaration + "'" +
            '}';
    }
}
